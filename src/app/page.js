import Image from "next/image";
import FirebaseOne from "./components/FirebaseOne";
import FileUpload from "./components/FileUpload";

export default function Home() {
  return (
    <main> 
      
      <div className="text-center font-semibold py-5"> Nextjs Connection With Firebase</div>
      <FileUpload></FileUpload>
      {/* <FirebaseOne></FirebaseOne> */}
    </main>
  );
}
