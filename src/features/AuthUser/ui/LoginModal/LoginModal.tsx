import { Suspense } from "react";
import { Modal } from "@/shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { useTranslation } from "react-i18next";

interface IProps {
  modal: boolean;
  closeModal: () => void;
  lazy?: boolean;
}

function LoginModal(props: IProps) {
  const { closeModal, modal, lazy } = props;

  const { t } = useTranslation();

  return (
    <Modal modal={modal} closeModal={closeModal} lazy={lazy}>
      <Suspense fallback={`${t("loading")}...`}>
        <LoginFormAsync closeModal={closeModal} />
      </Suspense>
    </Modal>
  );
}

export default LoginModal;
