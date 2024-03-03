import { Modal } from "@/shared/ui/Modal";
import LoginForm from "../LoginForm/LoginForm";

interface IProps {
  modal: boolean;
  closeModal: () => void;
}

function LoginModal(props: IProps) {
  const { closeModal, modal } = props;

  return (
    <Modal modal={modal} closeModal={closeModal}>
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;
