import LeftComponent from "../ui/(root)/LeftComponent";

export default function Home() {
  return (
    <section className="layout-container flex gap-4">
      {/* Adding a dummy component to the left part that we need to keep empty, because something may 
      need to go there in the future. Also it keeps the layouts simpler. */}
      {/* In the figma design I saw that the left part (836px) is slightly wider than right part (720px)*/}
      <LeftComponent className={"flex-13/24"} />

      <div className="flex-11/24 flex">
        <div className="bg-blue-300 grow"></div>
      </div>
    </section>
  );
}
