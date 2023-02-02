class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
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

	findClosestNode(targetNode) {
		let currentNode = this.root;
		let closestNode = { val: Infinity, diff: Infinity}

		while(currentNode !== null) {
			let diff = Math.abs(targetNode - currentNode.value)
			if(diff <= closestNode.diff) {
				closestNode.val = currentNode.value;
				closestNode.diff = diff;
			}
			if(targetNode < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		return closestNode.val
	}

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
tree.insert(14);
console.log(tree.findClosestNode(12));
