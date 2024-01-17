import { ChangeEvent, useState } from "react";
import { AxiosError } from "axios";
import { BlockBlobClient } from "@azure/storage-blob";
import { useSnackbar } from "notistack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createImportProductsSasUrl } from "~/queries/products";

type CSVFileImportProps = {
  title: string;
};

export default function CSVFileImport({ title }: CSVFileImportProps) {
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    try {
      if (!file) throw new Error("File not found");

      setIsLoading(true);
      const sasUrl = await createImportProductsSasUrl(
        (
          file.name.replace(/\.[a-z]+$/, "").match(/[a-zA-Z\d-_]+/gm) ?? [
            "name",
          ]
        )?.join(""),
      );
      const blockBlobClient = new BlockBlobClient(sasUrl);
      await blockBlobClient.uploadData(file);
      enqueueSnackbar("File uploaded", { variant: "success" });
      removeFile();
    } catch (error) {
      const e = error as AxiosError<{ unknown: string }>;
      let message = "Failed to upload file. Please try again.";
      if (e.response && e.response.data?.unknown) {
        message = e.response.data.unknown;
      }
      enqueueSnackbar(message, {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!file ? (
            <input type="file" accept=".csv" onChange={onFileChange} />
          ) : (
            <div>
              <button onClick={removeFile}>Remove file</button>
              <button onClick={uploadFile}>Upload file</button>
            </div>
          )}
        </>
      )}
    </Box>
  );
}
