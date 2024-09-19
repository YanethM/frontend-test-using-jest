import React, { useState } from "react";
import "./Dashboard.css";
import { Bookmark, DashboardRounded, TocRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import {image} from "../../assets/index";
import { Item } from "./Item";
import { duration } from "@mui/material";

export const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const sideContainerVariants = {
      true: {
        width: "15rem",
      },
      false:{
        transition: { delay: 0.6 },
      }
    };

    const sidebarVariants = {
        true:{},
        false:{
            width: "3rem",
            transition: { delay: 0.6 },
        }
    }

    const profileVariants ={
        true:{
            alingSelf: "center",
            width: '4rem'
        },
        false:{
            alingSelf: "flex-start",
            marginTop: "2rem",
            width: '3rem',
        }
    }
    /* Para ocultar el menú y que sólo se visualicen los iconos */
    const handleToogle = () => {
        setOpen(!open);
    };


  return (
    <>
      <motion.div
        data-open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container">
        <motion.div
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
          className="sidebar">
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transition: { delay: 0.2, duration: 0.4 },
            }}
            onClick={handleToogle}
            className="lines_icon">
            <TocRounded />
          </motion.div>
          <motion.div
            layout
            className="profile"
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              cursor: "pointer",
            }}>
            <img src={image.profile_image} alt="profile_image" />
          </motion.div>
          <div className="groups">
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                Usuarios
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Activos" />
              <Item icon={<Bookmark />} name="Inactivos" />
            </div>
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                Group 2
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard text" />
              <Item icon={<DashboardRounded />} name="Dashboard text" />
              <Item icon={<DashboardRounded />} name="Dashboard text" />
            </div>
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}>
                Group 3
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard text" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="body_container">Contenido página</div>
    </>
  );
};
