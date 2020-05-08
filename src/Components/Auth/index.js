import React from "react";
import Basicpage from "../Basicpage/index.js";
import SigninContainer from "./Signin/signInContainer.js"
import RegisterContainer from "./Register/registerContainer.js"
import { Box, ResponsiveContext, Grid, Grommet, grommet } from "grommet";

const rows = {
    small: ["xsmall", "xsmall", "xsmall"],
    medium: ["xsmall", "xsmall"],
    large: ["xsmall"],
    xlarge: ["xsmall"]
  };

const columns = {
    small: ["auto"],
    medium: ["auto", "auto"],
    large: ["auto", "auto", "auto"],
    xlarge: ["auto", "auto", "auto"]
};
const fixedGridAreas = {
    small: [
      { name: "header", start: [0, 0], end: [0, 0] },
      { name: "test", start: [0, 1], end: [0, 1] },
      { name: "test1", start: [0, 2], end: [0, 2] }
    ],
    medium: [
      { name: "header", start: [0, 0], end: [1, 0] },
      { name: "test", start: [0, 1], end: [0, 1] },
      { name: "test1", start: [1, 1], end: [1, 1] }
    ],
    large: [
      { name: "header", start: [0, 0], end: [0, 0] },
      { name: "test", start: [1, 0], end: [1, 0] },
      { name: "test1", start: [2, 0], end: [2, 0] }
    ],
    xlarge: [
      { name: "header", start: [0, 0], end: [0, 0] },
      { name: "test", start: [1, 0], end: [1, 0] },
      { name: "test1", start: [2, 0], end: [2, 0] }
    ]
  };


const Responsive = ({
    children,
    overrideColumns,
    overrideRows,
    areas,
    ...props
  }) => (
    <ResponsiveContext.Consumer>
      {size => {
        // Take into consideration if not array is sent but a simple string
        let columnsVal = columns;
        if (columns) {
          if (columns[size]) {
            columnsVal = columns[size];
          }
        }
  
        let rowsVal = rows;
        if (rows) {
          if (rows[size]) {
            rowsVal = rows[size];
          }
        }
  
        // Also if areas is a simple array not an object of arrays for
        // different sizes
        let areasVal = areas;
        if (areas && !Array.isArray(areas)) areasVal = areas[size];
  
        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
          >
            {children}
          </Grid>
        );
      }}
    </ResponsiveContext.Consumer>
  );

function Authpage(){
    return(
        <Basicpage>
            <Grommet theme={grommet}>
                <Box height="large">
                    <Responsive rows={rows} columns={columns} areas={fixedGridAreas} margin="small">
                        <Box overflow="auto" align="left" height="medium"> 
                            <SigninContainer/>
                        </Box>
                        <Box align="right" width="medium">
                            <RegisterContainer/>
                        </Box>
                    </Responsive>
                </Box>
            </Grommet>
        </Basicpage>
    )
}


export default Authpage;