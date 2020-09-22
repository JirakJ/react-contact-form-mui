import React from 'react';
import {FormGroup, withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => {
    return {
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
            },
        },
    };
};

const CustomFormGroup = props => {
    const { classes, className, outlined, squared, children, ...rest } = props;

    return (
        <FormGroup
            {...rest}
            className={classes.root}
        >
            {children}
        </FormGroup>
    );
}

CustomFormGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
    outlined: PropTypes.bool,
    squared: PropTypes.bool
};

CustomFormGroup.defaultProps = {
    squared: false,
    outlined: true,
    elevation: 0
};

export default withStyles(styles)(CustomFormGroup);