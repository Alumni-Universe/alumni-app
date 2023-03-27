import CreateTopicsModal from "../components/topics/CreateTopicsModal";


const Topics: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl mb-4">TOPICS</h2>
      <CreateTopicsModal />
    </section>
  );
};

export default Topics;
