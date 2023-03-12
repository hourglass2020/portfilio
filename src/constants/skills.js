import { CssOutlined, HtmlOutlined, JavascriptOutlined } from "@mui/icons-material";

export const devSkills = {
    htmlSkill: {
        id: 0,
        name: "HTML",
        icon: <HtmlOutlined sx={{ fontSize: 40 }} />,
        color: 'primary'
    },

    cssSkill: {
        id: 1,
        name: "CSS",
        icon: <CssOutlined sx={{ fontSize: 40 }} />,
        color: 'info'
    },

    jsSkill: {
        id: 2,
        name: "JavaScript",
        icon: <JavascriptOutlined sx={{ fontSize: 40 }} />,
        color: 'error'
    },

}