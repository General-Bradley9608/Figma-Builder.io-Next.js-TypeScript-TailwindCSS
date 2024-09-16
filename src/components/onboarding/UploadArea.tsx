import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadAreaProps {
  onFileUpload: (file: File) => void;
  uploadedFile: File | null;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onFileUpload, uploadedFile }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxSize: 25 * 1024 * 1024 });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col justify-center cursor-pointer px-6 py-24 mt-12 max-w-full text-black rounded-lg bg-gray-300 bg-opacity-20 min-h-[290px] w-[594px] max-md:px-5 max-md:mt-10"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col w-full max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f1910e4ee17cd9b348b67c4ca597dbf126ad75c71af1b84dc599dcbb8e28d3f?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b" className="object-contain self-center w-10 rounded-3xl aspect-square" alt="" />
        <div className="flex flex-col mt-3 w-full max-md:max-w-full">
          {uploadedFile ? (
            <p className="text-sm text-center">{uploadedFile.name}</p>
          ) : (
            <>
              <div className="flex flex-wrap gap-1 justify-center items-start w-full text-sm leading-none max-md:max-w-full">
                <span className="font-semibold">Click to upload</span>
                <span>or drag and drop</span>
              </div>
              <p className="mt-1 text-xs text-center max-md:max-w-full">Max size is 25MB</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadArea;