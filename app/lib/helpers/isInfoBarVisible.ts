export default function infoBarVisibility(isVisible: boolean, turnOffDate: string): boolean {
  const nowDate = new Date();
  const validUntilDate = new Date(turnOffDate);

  return isVisible && nowDate < validUntilDate;
}
