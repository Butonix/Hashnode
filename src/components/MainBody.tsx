import Aside from "./Aside";
import RightAsideMain from "./RightAsideMain";
import MainBodyArticles from "./MainBodyArticles";

const MainBody = () => {
  return (
    <main className="min-h-screen w-full bg-light-bg dark:bg-black">
      <div className="container-body mx-auto max-w-[1550px] gap-4 px-4">
        <Aside />
        <MainBodyArticles />
        <RightAsideMain />
      </div>
    </main>
  );
};

export default MainBody;
