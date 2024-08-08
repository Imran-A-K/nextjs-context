"use client";
import React, { useState } from "react";
import { BsFolderPlus } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";

import { CgRename } from "react-icons/cg";
import { IoIosTrash } from "react-icons/io";
import { getIcon, getIconClasses, getIconStyles } from "@/lib/utils";
function Folder({
  folderData,
  handleInsertNode,
  handleUpdateNode,
  handleDeleteNode,
}) {
  const [expand, setExpand] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFileAndFolder = (event, isFolder = null) => {
    event.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleDeleteFileAndFolder = (event, isFolder = null) => {
    event.stopPropagation();
    handleDeleteNode(folderData.id);
  };
  const handleRenameFileAndFolder = (event, isFolder = null) => {
    event.stopPropagation();
    setIsRenaming(!isRenaming);
  };

  const onEnterPress = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      handleInsertNode(folderData.id, event.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  };

  const onEnterPressForRename = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      handleUpdateNode(folderData.id, event.target.value);
      setIsRenaming(false);
    }
  };
  if (folderData.isFolder) {
    return (
      <div className="mt-5 pl-5">
        <div
          onClick={() => setExpand(!expand)}
          className="flex gap-4 cursor-pointer group"
        >
          <div className="flex gap-2 ">
            <span>{expand ? "📂" : "📁"}</span>
            {isRenaming ? (
              <input
                type="text"
                defaultValue={folderData.name}
                autoFocus
                onKeyDown={onEnterPressForRename}
                onBlur={() => setIsRenaming(false)}
                className="border-2 rounded-sm"
              />
            ) : (
              <span>{folderData.name}</span>
            )}
          </div>

          <div className="flex gap-4 items-center">
            <div className="group-hover:visible invisible flex gap-4 items-center">
              <button onClick={(event) => handleRenameFileAndFolder(event)}>
                <CgRename className="h-5 w-5 text-blue-400" />
              </button>
              <button
                onClick={(event) => handleDeleteFileAndFolder(event, true)}
              >
                <IoIosTrash className="h-5 w-5 text-destructive" />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <button onClick={(event) => handleNewFileAndFolder(event)}>
                <VscNewFile className="h-5 w-5 text-blue-700" />
              </button>
              <button onClick={(event) => handleNewFileAndFolder(event, true)}>
                <BsFolderPlus className="h-5 w-5 text-yellow-700" />
              </button>
            </div>
          </div>
        </div>
        {showInput.visible && (
          <div className="flex gap-2 pl-4 pt-2">
            <span> {showInput.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              className="border-2 rounded-sm"
              autoFocus
              onKeyDown={onEnterPress}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            />
          </div>
        )}
        <div className={`${expand ? "block" : "hidden"}`}>
          {folderData.items.map((folder) => (
            <Folder
              key={folder.id}
              folderData={folder}
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
              handleUpdateNode={handleUpdateNode}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="mt-5 pl-5">
      <div className="flex gap-4 cursor-pointer group">
        <div className="flex gap-4 items-center">
          {" "}
          <span style={getIcon(folderData.name).iconStyles}>
            {getIcon(folderData.name).icon}
          </span>{" "}
          {isRenaming ? (
            <input
              type="text"
              defaultValue={folderData.name}
              autoFocus
              onKeyDown={onEnterPressForRename}
              onBlur={() => setIsRenaming(false)}
              className="border-2 rounded-sm"
            />
          ) : (
            <span>{folderData.name}</span>
          )}
        </div>

        <div className="group-hover:visible invisible flex gap-4 items-center">
          <button onClick={(event) => handleRenameFileAndFolder(event)}>
            <CgRename className="h-5 w-5 text-blue-400" />
          </button>
          <button onClick={(event) => handleDeleteFileAndFolder(event, true)}>
            <IoIosTrash className="h-5 w-5 text-destructive" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Folder;
