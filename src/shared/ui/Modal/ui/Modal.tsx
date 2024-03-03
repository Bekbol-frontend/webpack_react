import { ReactNode, useCallback, useEffect } from "react";
import styles from "./Modal.module.scss";
import { TypeMods, clsx } from "@/shared/lib/clsx";
import { Icon } from "../../Icon";
import Button from "../../Button/ui/Button";
import Portal from "../../Portal";

interface IProps {
  children: ReactNode;
  modal: boolean;
  closeModal: () => void;
}

function Modal(props: IProps) {
  const { children, modal, closeModal } = props;

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (modal) {
      window.addEventListener("keyup", onKeyUp);
      document.body.style.cssText = `
        overflow: hidden;
      `;
    }

    return () => {
      window.removeEventListener("keyup", onKeyUp);
      document.body.style.cssText = `
        overflow: auto;
      `;
    };
  }, [modal, onKeyUp]);

  const mods: TypeMods = {
    [styles.show]: modal,
  };

  return (
    <Portal>
      <div className={clsx([styles.modal], mods)} onClick={closeModal}>
        <article
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <header className={styles.modalContainerHeader}>
            <h1 className={styles.modelContainerTitle}>Modal title</h1>
            <Button
              type_btn="text"
              classNameProps={styles.iconButton}
              onClick={closeModal}
            >
              <Icon icon="close" />
            </Button>
          </header>
          <section className={clsx([styles.modalContainerBody])}>
            {children}
          </section>
        </article>
      </div>
    </Portal>
  );
}

export default Modal;
