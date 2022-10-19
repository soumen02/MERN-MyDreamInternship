import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: "20px"
    },
    cardGrid: {
        padding: "20px 0",
        minWidth: "90%",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        spacing: 0
    },
    card: {
        minWidth: "100%",
        margin: "12px 0",
        display: 'flex',
        flexDirection: 'column',
        width: '400px'
    }
}));

export default useStyles;