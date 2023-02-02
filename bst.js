class BST {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}

	search(val) {
		if(!this.root) {
			return false;
		}
		let currentNode = this.root; //Mark the root node as current node and start comparing with the value we want to search for
		while(currentNode.value) {
			// if the target value to search for is less than the current node then go left
			if(val < currentNode.value) {
				currentNode = currentNode.left;
			}
			// if the target value to search for is more than the current node then go right
			if (val > currentNode.value) {
				currentNode = currentNode.right;
			}
			// if the target value to search for is equal to the current node then return it
			if(val === currentNode.value) {
				return currentNode.value;
			}
		}
	}

	insert(val) {
		if(!this.root) {
			this.root = new BST(val)
			return this.root;
		}
		let currentNode = this.root;
		while(true) {
			// if the value to be inserted is less than the root node then go left
			if(val < currentNode.value) {
				if(!currentNode.left) {
					currentNode.left = new BST(val);
					return this;
				}
				currentNode = currentNode.left
			} else { // if the value to be inserted is more than the root node then go right
				if (!currentNode.right) {
					currentNode.right = new BST(val);
					return this;
				}
				currentNode = currentNode.right;
			}
		}
	}

	remove(val, parentNode=null) {
		if(!this.root) {
			return false
		}
		let currentNode = this.root;
		while(currentNode !== null) {
			// if the value to be removed is less than the currentNode, go left
			if(val < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			// if the value to be removed is greater than the currentNode, go right
			} else if (val > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				// if it is not a leaf node and contains left and right children
				if(currentNode.left !== null && currentNode.right !== null) {
					currentNode.value = currentNode.right.getMinValue();
					currentNode.right.remove(currentNode.value, currentNode)
				} else if (parentNode === null) {
					if(currentNode.left !== null) {
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if(currentNode.right !== null) {
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					} else {
						// Do nothing; single node
					}
				} else if (parentNode.left === currentNode) {
					parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
				} else if (parentNode.right === currentNode) {
					parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
				}
				break;
			}
		}
	}

	 getMinValue() {
		let currentNode = this;
		while(currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}
}

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(1);
tree.insert(12);
tree.insert(14);
// console.log(tree.search(13));
tree.remove(10);
console.log(JSON.stringify(traverse(tree.root)));