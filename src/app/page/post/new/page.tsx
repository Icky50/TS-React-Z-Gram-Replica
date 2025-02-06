import { ImageUploadPreviewLable } from "~/app/_components/image-upload-preview-lable.component";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-4 flex-grow mx-20">
      <input className="mb-4 p-2 border rounded w-full" type="text" placeholder="Title" />
      <input
        className="hidden"
        type="file"
        placeholder="Image URL"
        id="image-upload"
      />
      <ImageUploadPreviewLable htmlFor="image-upload" />
      <input className="mt-4 p-2 border rounded w-full" type="text" placeholder="Caption" />
    </div>
  );
}
