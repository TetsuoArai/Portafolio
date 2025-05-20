import { Download, Github, Linkedin } from "lucide-react";

export const ButtonsContact = () => {
  return (
    <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col-1 md:flex-col-3 items-center gap-4 z-10 mt-7">
      <a
        href="https://www.linkedin.com/in/tetsuoarai"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white transition-all flex items-center justify-center px-4 py-2 rounded-md"
      >
        <Linkedin className="mr-2 h-5 w-5" />
        LinkedIn
      </a>

      <a
        href="https://github.com/TetsuoArai"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white transition-all flex items-center justify-center px-4 py-2 rounded-md"
      >
        <Github className="mr-2 h-5 w-5" />
        GitHub
      </a>

      <button
        variant="outline"
        size="lg"
        className="cursor-pointer bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white transition-all flex items-center justify-center px-4 py-2 rounded-md"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "src/assets/CVTetsuoArai.pdf";
          link.download = "TetsuoArai_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <Download className="mr-2 h-5 w-5" />
        Descargar CV
      </button>
    </div>
  );
};
