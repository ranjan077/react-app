import React, {useState, Fragment} from 'react';
import './App.css';
import Counter from './components/Counter.jsx';
import RefsDemo from './components/RefsDemo.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import HigherOrderCompDemo from './components/HigherOrderCompDemo';
import UseEffectsDemo from './components/HOOKS/UseEffectsDemo';
import RenderPropsDemo from './components/RenderPropsDemo';
import UseContextDemo from './components/UseContextDemo'
import UseContextReducerDemo from './components/UseContextReducerDemo';
import CSSmoduleDemo from './components/CSSmoduleDemo';
import ReactRouterDemo from './components/ReactRouterDemo';
import ReactComponentLifeCycle from './components/ReactComponentLifeCycle'
import ReactLazyLoadComp from './components/ReactLazyLoadComp';
import StlyedComponentWithThemeDemo from './components/StlyedComponentWithThemeDemo';
import ProtectedRouteDemo from './components/ProtectedRouteDemo';

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <Fragment>
        <h2> This is react concepts demo</h2>
        <div className="App">
            <ErrorBoundary>
              <Counter initialCount={0}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <Counter initialCount={1}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <RefsDemo/>
            </ErrorBoundary>
            <ErrorBoundary>
                <HigherOrderCompDemo />
            </ErrorBoundary>
            <ErrorBoundary>
                {display && <UseEffectsDemo />}
                <button onClick={() => setDisplay(!display)}>Unmount UseEffectsDemo</button>
            </ErrorBoundary>
            <ErrorBoundary>
                <RenderPropsDemo />
            </ErrorBoundary>
            <ErrorBoundary>
                <UseContextDemo />
            </ErrorBoundary>
            <ErrorBoundary>
              <UseContextReducerDemo/>
            </ErrorBoundary>
            <ErrorBoundary>
              <CSSmoduleDemo/>
            </ErrorBoundary>
            <ErrorBoundary>
              <ReactRouterDemo />
            </ErrorBoundary>
            <ErrorBoundary>
              <div className="state-msg" id="msgbox"></div>
              <ReactComponentLifeCycle />
            </ErrorBoundary>
            <ErrorBoundary>
              <ReactLazyLoadComp />
            </ErrorBoundary>
            <ErrorBoundary>
                <StlyedComponentWithThemeDemo/>
            </ErrorBoundary>
            <ErrorBoundary>
              <ProtectedRouteDemo/>
            </ErrorBoundary>
        </div>
    </Fragment>
    
  );
}

export default App;
