import { AppState, useSelector } from "@/store/Store";
import i18n from "@/utils/i18n";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";


export default function BlankLayout() {
  const customizer = useSelector((state: AppState) => state.customizer);
  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [customizer.isLanguage, i18n]);

  return (
    <>
      <Outlet />
    </>
  )
}
