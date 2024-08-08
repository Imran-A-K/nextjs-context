"use client";
import Folder from "@/components/fileExplorer/Folder";
import fileExplorerData from "@/lib/data/fileExplorer";
import useTraverseTree from "@/lib/hooks/use-traverse-tree";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const [folderData, setFolderData] = useState(fileExplorerData);
  const { insertNode, updateNodeName, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalTree = insertNode(folderData, folderId, itemName, isFolder);
    setFolderData(finalTree);
  };
  const handleDeleteNode = (folderId) => {
    const finalTree = deleteNode(folderData, folderId);
    setFolderData(finalTree);
  };
  const handleUpdateNode = (folderId, newName) => {
    const finalTree = updateNodeName(folderData, folderId, newName);
    setFolderData(finalTree);
  };
  return (
    <div className="pt-10 pl-14">
      <Link
        className="border-2 rounded-sm m-5 px-5 py-3 bg-teal-500 text-white"
        href="/selectable-grid"
      >
        Grid
      </Link>
      <Folder
        folderData={folderData}
        setFolderData={setFolderData}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleUpdateNode={handleUpdateNode}
      />
    </div>
  );
}

export default Page;
