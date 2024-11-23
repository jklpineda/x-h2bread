import { useTranslation } from "react-i18next";

export const getFaqs = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      question: t("faq_question_1"),
      answer: t("faq_answer_1"),
      delay: ".1s",
      expanded: false,
    },
    {
      id: 2,
      question: t("faq_question_2"),
      answer: t("faq_answer_2"),
      delay: ".3s",
      expanded: true,
    },
    {
      id: 3,
      question: t("faq_question_3"),
      answer: t("faq_answer_3"),
      delay: ".5s",
      expanded: false,
    },
    {
      id: 4,
      question: t("faq_question_4"),
      answer: t("faq_answer_4"),
      delay: ".6s",
      expanded: false,
    },
    {
      id: 5,
      question: t("faq_question_5"),
      answer: t("faq_answer_5"),
      delay: ".7s",
      expanded: false,
    },
  ];
};
