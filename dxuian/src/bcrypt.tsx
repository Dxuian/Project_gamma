
import bcrypt from 'bcryptjs';

export async function saltAndHashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
    // return "hakunamata";
}

export async function comparehashes(pwd1:string  , pwd2:string)
{
    const match = await bcrypt.compare(pwd1, pwd2);
    return match 
}