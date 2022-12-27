export default function () {
    return useState<boolean>('auth', () => false);
  }