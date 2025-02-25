import { createContext } from "react"
import { makeStyles } from "tss-react/mui"

export const StyleContext = createContext({} as any)

export const useSendStyles = makeStyles()(theme => ({
  sendWrapper: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.6rem",
    },
  },
  sendPanel: {
    width: "56.8rem",
    padding: "3.6rem 2.8rem",
    backgroundColor: "rgba(201, 203, 206, 0.2)",
    borderRadius: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "2.8rem 1.6rem",
    },
  },

  sendSelect: {
    marginBottom: "4.2rem",
  },

  sendTransfer: {
    margin: "-1rem 0",
    borderRadius: "50%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  sendTransferIcon: {
    fontSize: "2.5rem",
    cursor: "inherit",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },

  button: {
    marginTop: "2rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "46rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  detailRow: {},
  detailLabel: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  destinationTxFeeAndAmount: {
    marginTop: "2.4rem",
  },
}))
