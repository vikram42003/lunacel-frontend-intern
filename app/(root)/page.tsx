import WidgetContainer from "../ui/(root)/WidgetContainer";
import GalleryCard from "../ui/(root)/GalleryWidget";
import LeftComponent from "../ui/(root)/LeftComponent";
import ProfileWidget from "../ui/(root)/ProfileWidget";

export default function Home() {
  return (
    <section className="layout-container flex gap-12">
      {/* Adding a dummy component to the left part that we need to keep empty, because something may 
      need to go there in the future. Also it keeps the layouts simpler. */}
      {/* Also, its slightly bigger than the widgets. In the figma design I saw that the left part (836px) is slightly wider than right part (720px)*/}
      <LeftComponent className={"flex-13/24"} />

      <div className="flex-11/24 flex flex-col gap-6">
        {/* Made WidgetContainer a reusable component since it has a common style*/}
        <WidgetContainer className="flex-1/2">
          <ProfileWidget />
        </WidgetContainer>

        <WidgetContainer className="flex-1/2">
          <GalleryCard />
        </WidgetContainer>
      </div>
    </section>
  );
}
