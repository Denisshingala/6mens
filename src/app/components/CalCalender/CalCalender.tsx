import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const CalCalender = () => {
    useEffect(() => {
        (async function () {
            const calContact = await getCalApi({ namespace: 'cal-container' });
            calContact("ui", { "theme": "dark", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Cal
        namespace="cal-container"
        calLink="6-man-info-tech/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: 'month_view' }}
    />;
};

export default CalCalender;