import { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZoneComponent: FunctionComponent<{setFile:Dispatch<any>}> = ({setFile}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      setFile(acceptedFiles[0]);
    },
    [],
  );

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'audio/mpeg': ['.mp3']
    }
  });

  return (
    <div className="w-full p-4">
      <div {...getRootProps()} className="w-full rounded-md cursor-pointer h-80 focus:outline-none">
        <input {...getInputProps()} />

        <div className={
          "flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed rounded-xl border-yellow-light "
          + (isDragReject ? "border-red-500" : "")
          + (isDragReject ? "border-green-500" : "")
        }>
          <img src="/images/folder.png" alt="folder" className="w-16 h-16" />

          {isDragReject
            ? (<p>Sorry, This app only supports images and mp3 files</p>)
            : (<div>
              <p>Drag & Drop Files Here</p>
              <p className="mt-2 text-base text-gray-300">Only jpeg, png & mp3 files supported</p>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;