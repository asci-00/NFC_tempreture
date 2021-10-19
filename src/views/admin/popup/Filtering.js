//react library
import React, {useState, useEffect} from "react";
//styles
// import { makeStyles } from "@material-ui/core/styles";
// import commonStyles from "assets/theme/views/admin/common.js";
//static configuration data
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid"
import FilledInput from "@material-ui/core/FilledInput"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const filterItem = [
    {
        name : '특정사용자',
        field : 'user',
        type : 'select',
        default : '',
    }, {
        name : '동선겹침',
        field : 'overlap',
        type : 'select',
        default : '',
    }, {
        name : '검색날짜',
        field : 'date',
        type : 'date',
        default : '',
    }, {
        name : '건물',
        field : 'building',
        type : 'select',
        default : '',
    }, 
]

const filterItemObject = {}


const FilterComponent = (props) => {
    /*dialog component*/
    /**
     * 필터 항목
     * [체크박스]동선 겹침 사용자[셀렉트박스]
     * [체크박스]날짜[기본값:일주일 전 - 현재]
     * [체크박스]건물[셀렉트박스]
     * 
     */

    const [filterValues, setfilterValues] = useState(null)
    const {open, onClose, onSubmit} = props
    useEffect(() => {
        filterItem.forEach(item => {
            filterItemObject[item.field] = {
                name : item.name,
                checked : false,
                value : item.default,
            }
        })
        setfilterValues(filterItemObject)
    }, [])
    
    const handlingCheck = (key, checked) => {
        setfilterValues({...filterValues, [key] : {
            value : '',
            checked
        }})
    }
    const handlingValue = (key, value) => {
        setfilterValues({...filterValues, [key] : {
            ...filterValues[key],
            value
        }})
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>필터 설정</DialogTitle>
            <DialogContent>
            <Grid container spacing={3}>
                {filterValues && Object.keys(filterValues).map((filter, idx) => (
                    <Grid item xs={12} lg={12} md={8} key={idx}>
                        <FormControl>
                            <FormControlLabel
                                control={ <Checkbox checked={filterValues[filter].checked} onChange={(ev)=>handlingCheck(filter, ev.target.checked)} color="primary" /> }
                                label={<FilledInput
                                    autoComplete="off"
                                    type="text"
                                    placeholder={filterItemObject[filter]['name']}
                                    value={filterValues[filter].value}
                                    color="primary"
                                    onChange={ev => handlingValue(filter, ev.target.value)}
                                    disabled={!filterValues[filter].checked}
                                />}
                            />
                        </FormControl>
                    </Grid>
                ))}
            </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => { onSubmit(filterValues); onClose() }}>
                    지도적용
                </Button>
                <Button onClick={onClose} autoFocus>
                    취소
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default FilterComponent