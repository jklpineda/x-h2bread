//app/survey/page.jsx

import Survey from "@/components/survey/Survey";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
    title: "Survey || H2Bread",
    description: "H2Bread - Survey",
};

export default function page() {
    return (
        <>
            <Header />
            <Survey />
        </>
    );
}
