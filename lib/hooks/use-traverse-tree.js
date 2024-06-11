// "use client";

// const useTraverseTree = () => {
//   function insertNode(tree, folderId, itemName, isFolder) {
//     // check if it is the root folder or not
//     if (tree.id === folderId && tree.isFolder) {
//       tree.items.unshift({
//         id: crypto.randomUUID(),
//         name: itemName,
//         isFolder,
//         items: [],
//       });
//       return tree;
//     }
//     const latestNode = tree.items.map((item) =>
//       insertNode(item, folderId, itemName, isFolder)
//     );
//     return { ...tree, items: latestNode };
//   }

//   return {
//     insertNode,
//   };
// };

// export default useTraverseTree;

"use client";

const useTraverseTree = () => {
  function insertNode(tree, folderId, itemName, isFolder) {
    // Helper function to perform the insertion
    function insertRecursive(node) {
      // If we find the folder, we insert the new item
      if (node.id === folderId && node.isFolder) {
        return {
          ...node,
          items: [
            {
              id: crypto.randomUUID(),
              name: itemName,
              isFolder,
              items: [],
            },
            ...node.items,
          ],
        };
      }

      // Recursively search in child nodes
      if (node.items) {
        const updatedItems = node.items.map((child) => insertRecursive(child));
        return { ...node, items: updatedItems };
      }

      return node;
    }

    // Start the insertion process
    return insertRecursive(tree);
  }

  function updateNodeName(tree, nodeId, newName) {
    // Helper function to perform the update
    function updateRecursive(node) {
      if (node.id === nodeId) {
        return {
          ...node,
          name: newName,
        };
      }

      if (node.items) {
        const updatedItems = node.items.map((child) => updateRecursive(child));
        return { ...node, items: updatedItems };
      }

      return node;
    }

    return updateRecursive(tree);
  }

  function deleteNode(tree, nodeId) {
    // Helper function to perform the deletion
    function deleteRecursive(node) {
      if (!node.items) {
        return node;
      }

      const filteredItems = node.items
        .map((child) => deleteRecursive(child))
        .filter((child) => child.id !== nodeId);

      return { ...node, items: filteredItems };
    }

    return deleteRecursive(tree);
  }

  return {
    insertNode,
    updateNodeName,
    deleteNode,
  };
};

export default useTraverseTree;
