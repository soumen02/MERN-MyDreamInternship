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
        minWidth: "400px",
        // margin: "12px 0",
         display: 'flex',
         flexDirection: 'column',
        // width: '400px',
        // height: '175px'
        height: '100%'

    },
    cardMedia: {
        height: '100',
        width: '100'
    },
    cardContent: {
        flexGrow: '1'
    },
    Box: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

export default useStyles;