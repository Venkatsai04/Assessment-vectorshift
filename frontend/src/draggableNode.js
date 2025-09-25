export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`text-white border-4 rounded-lg min-w-24 min-h-20 gap-2 cursor-grab flex items-center justify-center flex-col p-2 flex-wrap ${type}`}
      style={{
        backgroundColor: "rgb(30,30,30)", // dark background
        borderStyle: "solid",
        borderWidth: "4px",
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      }}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};
