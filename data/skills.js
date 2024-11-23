import { useTranslation } from "react-i18next";

export const getSkills = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("skill_title_1"),
      percentage: 90,
      delay: ".2s",
    },
    {
      title: t("skill_title_2"),
      percentage: 80,
      delay: ".4s",
    },
    {
      title: t("skill_title_3"),
      percentage: 85,
      delay: ".6s",
    },
    {
      title: t("skill_title_4"),
      percentage: 70,
      delay: ".8s",
    },
  ];
};
