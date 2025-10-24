import WidgetContainer from "../ui/(root)/WidgetContainer";
import GalleryWidget from "../ui/(root)/GalleryWidget";
import ProfileWidget from "../ui/(root)/ProfileWidget";

export default function Home() {
  return (
    <section className="layout-container">
      {/* Im using ml-auto to keep the left part of the screen empty and move the widgets to the right
          But if we put something there then we can just turn on flexbox and then style it responsively with that */}

      <div className="w-[45%] ml-auto flex flex-col gap-4 3xl:gap-16">
        {/* Made WidgetContainer a reusable component since it has common styles*/}
        <WidgetContainer className="flex-1/2">
          <ProfileWidget />
        </WidgetContainer>

        <WidgetContainer className="flex-1/2">
          <GalleryWidget />
        </WidgetContainer>
      </div>
    </section>
  );
}