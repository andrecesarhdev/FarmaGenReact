import { toast } from "react-toastify";

type TipoToast = "sucesso" | "erro" | "info" | "aviso";

export function ToastAlerta(
  mensagem: string,
  tipo: TipoToast = "info"
) {
  const config = {
    position: "top-right" as const,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored" as const,
  };

  switch (tipo) {
    case "sucesso":
      toast.success(mensagem, config);
      break;
    case "erro":
      toast.error(mensagem, config);
      break;
    case "aviso":
      toast.warn(mensagem, config);
      break;
    default:
      toast.info(mensagem, config);
  }
}