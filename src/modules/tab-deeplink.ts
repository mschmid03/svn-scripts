// Tab-Deep-Links: ?tab=<wert> öffnet den Webflow-Tab, in dem ein Element mit ms-tabclick-link="<wert>" steckt.
// Links mit ms-tabclick-navlink="<wert>" bekommen den passenden ?tab=-Parameter angehängt.
// Ersetzt die Inline-Scripts im Site Head und auf Herren, Frauen, Freizeit, Juniorinnen,
// Leichtathletik, Kindersport (cmstabs-Callback) und Gymnastik (jQuery).

type FsAttributesV1 = unknown[] & { push: (...items: unknown[]) => void };
type WebflowQueue = unknown[] & { push: (...items: unknown[]) => void };

declare global {
    interface Window {
        fsAttributes?: FsAttributesV1;
        Webflow?: WebflowQueue;
    }
}

function rewriteNavLinks() {
    document
        .querySelectorAll<HTMLAnchorElement>("a[ms-tabclick-navlink]")
        .forEach((link) => {
            const tab = link.getAttribute("ms-tabclick-navlink");
            if (!tab) return;
            try {
                const url = new URL(link.href, location.origin);
                url.searchParams.set("tab", tab);
                link.href = url.toString();
            } catch {
                // ungültige href: Link unverändert lassen
            }
        });
}

function openTab(tab: string) {
    const target = CSS.escape(tab);
    for (const tabLink of document.querySelectorAll<HTMLElement>(".w-tab-link")) {
        if (tabLink.querySelector(`[ms-tabclick-link="${target}"]`)) {
            tabLink.scrollIntoView({ behavior: "smooth", block: "center" });
            tabLink.click();
            return;
        }
    }
}

export function initTabDeepLinks() {
    rewriteNavLinks();

    const tab = new URLSearchParams(location.search).get("tab");
    if (!tab) return;

    if (document.querySelector("[fs-cmstabs-element]")) {
        // CMS-Tabs werden erst von Finsweet cmstabs (v1) aufgebaut
        window.fsAttributes = window.fsAttributes || ([] as unknown as FsAttributesV1);
        window.fsAttributes.push(["cmstabs", () => openTab(tab)]);
    } else {
        window.Webflow = window.Webflow || ([] as unknown as WebflowQueue);
        window.Webflow.push(() => openTab(tab));
    }
}
