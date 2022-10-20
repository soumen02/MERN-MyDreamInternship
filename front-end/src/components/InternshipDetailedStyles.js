import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: "20px"
    },
    mainContainer: {
        padding: "100px 0",
        minWidth: "70%",
        minHeight: "100%",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        spacing: 0
    },
    horizontalStack: {
        spacing: 10,
        justifyContent: "space-between",
        minWidth: "100%"
    },
    dataLabel: {
        fontWeight: 'bold'
    },
    applyButton: {
        marginTop: "100px"
    }
}));

export default useStyles;