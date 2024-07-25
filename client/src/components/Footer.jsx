import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-cyan-500">
      <div>
        <div>
          <div>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              Scribe
              <span className="px-2 pb-1 bg-gradient-to-r from-lime-300 via-indigo-500 via-35% to-pink-500 rounded-lg text-white">
                Synapse
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://github.com/GWartelle/ScribeSynapse"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github of this project
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
