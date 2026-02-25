import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();
  return (
     <div className="flex justify-center bg-red-600">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold text-white">
             FarmaGen | © {data}.
          </p>
          <p className="text-lg text-white"> Acesse nossas redes sociais</p>
          <div className="flex gap-2 text-white" >
            <a href="https://www.linkedin.com/in/andrecesar-dev" target="_blank">
            <LinkedinLogoIcon size={48} weight= 'bold'/>
            </a>
            <a href="https://www.instagram.com/andrecesarh" target="_blank">
            <InstagramLogoIcon size={48} weight= 'bold'/>
            </a>
            <a href="https://www.github.com/andrecesarhdev" target="_blank">
            <GithubLogoIcon size={48} weight= 'bold'/>
            </a>
          </div>
        </div>
      </div>
  );
}

export default Footer;
