import React, { useState } from 'react';
import '../css/Login.css';
import { useForm } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section>
            <div className="login">
                <div className="col-1">
                    <h2>התחבר כאן</h2>
                    <span>הגיע הזמן לקחת החלטה שתשפר את חייך</span>
                    <form>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-username">שם משתמש</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-username"
                            type="text"
                            {...register("username", { required: 'שם המשתמש הוא שדה חובה' })}
                            label="שם משתמש"
                        />
                        {errors.username && <p className="error">{errors.username.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-email">דואר אלקטרוני</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email"
                            type="email"
                            {...register("email", {
                                required: 'דואר אלקטרוני הוא שדה חובה',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'פורמט הדואר האלקטרוני אינו תקין'
                                }
                            })}
                            label="דואר אלקטרוני"
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '46.5ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">סיסמה</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", { required: 'סיסמה היא שדה חובה' })}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="סיסמה"
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '46ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-confirm-password">אימות הסיסמה</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            {...register("confirmPassword", {
                                required: 'אימות הסיסמה הוא שדה חובה',
                                validate: value => value === getValues('password') || 'הסיסמאות אינן תואמות'
                            })}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="אימות הסיסמה"
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                    </FormControl>



                    <div> זכור אותי<Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} defaultChecked /></div>


                    <button className='btn' type="submit">התחברות</button>
                </form>
            </div>
        </div>
        </section >
    );
};

export default Login;
