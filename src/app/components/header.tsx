export const Header = () => {
    return (
      <div className="py-8 px-4 bg-blue-100 rounded-lg shadow-lg">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome little!</h1>
          <div className="relative">
            <div className="text-2xl font-semibold text-red-500 animate-bounce">
              ⚠️ URGENT MESSAGE ⚠️
            </div>
          </div>
          <p className="mt-4 text-xl text-blue-800 font-medium">
            Your big is currently trapped and needs your help!
          </p>
          <p className="mt-2 text-lg text-blue-700">
            Please get through this puzzle to find their location and save them!!!
          </p>
          <p className="mt-2 text-lg text-blue-700">
            I think if you refresh the page you will lose all your progress, save your answers on a notes sheet so incase you refresh you can just retype to get to the problem you were on
          </p>
          <p className="mt-2 text-lg text-blue-700">
            TEXT THE BIG ACCOUNT IF YOU NEED HELP
          </p>
        </div>
      </div>
    );
  };
  
  export default Header;