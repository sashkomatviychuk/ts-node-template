import { Branded } from './branded-types';

type Password = Branded<string, 'Password'>;
type Email = Branded<number, 'Email'>;

function isPassword(probablyPassword: string): probablyPassword is Password {
  return probablyPassword.length > 6;
}

function assertPassword(probablyPassword: string): asserts probablyPassword is Password {
  if (!isPassword(probablyPassword)) {
    throw new TypeError();
  }
}

function _parsePassword(probablyPassword: string): Password {
  assertPassword(probablyPassword);
  return probablyPassword;
}

const isEmail = (probablyEmail: unknown): probablyEmail is Email => {
  return typeof probablyEmail === 'string' && probablyEmail.includes('@');
};

function assertEmail(probablyEmail: unknown): asserts probablyEmail is Email {
  if (!isEmail(probablyEmail)) {
    throw new TypeError();
  }
}

function parseEmail(probablyEmail: string): Email {
  assertEmail(probablyEmail);
  return probablyEmail;
}

const email = parseEmail('probable@email');
sendEmail(email);

function sendEmail(email: Email) {
  console.log(`Send email to ${email}`);
}
