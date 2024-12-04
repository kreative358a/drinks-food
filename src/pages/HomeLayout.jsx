import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Particles from "react-particles";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };  

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);  

  return (
    <div style={{ width: "100%", height: "100%"}}>
    <div style={{position: 'fixed', height: '100%', width:'101%', top: '0', left: 0,  zIndex: 6, overflow:'auto'}}>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      </div>
      <div style={{position: 'fixed', width:'100%', top: '0', zIndex: 4}}>
      <Particles options={options} init={particlesInit} />
      </div>
    </div>
  );
};
export default HomeLayout;
