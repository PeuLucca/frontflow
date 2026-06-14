import { Modal } from "./Modal";
import { strings } from "../i18n/strings";
import "./RulesModal.css";

type RulesModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RulesModal({ open, onClose }: RulesModalProps) {
  return (
    <Modal open={open} title={strings.rules.title} onClose={onClose}>
      <p className="rules-modal__intro">{strings.rules.intro}</p>
      {strings.rules.sections.map((section) => (
        <div className="rules-modal__section" key={section.title}>
          <h3 className="rules-modal__section-title">{section.title}</h3>
          <p className="rules-modal__section-body">{section.body}</p>
        </div>
      ))}
      <p className="rules-modal__closing">{strings.rules.closing}</p>
    </Modal>
  );
}
