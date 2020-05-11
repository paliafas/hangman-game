import React from 'react';

const MainFooter = () => (
    <footer id="main-footer">
        <div className="container">
            <div className="info">
                <p>
                    Made with{' '}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="react-word">React</span>
                    </a>{' '}
                    and the{' '}
                    <a
                        href="https://www.datamuse.com/api/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="datamuse-api-word">Datamuse API</span>
                    </a>
                    .
                </p>
                <a
                    href="https://www.linkedin.com/in/pantelis-liafas-6438a8169/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </div>
    </footer>
);

export default MainFooter;
