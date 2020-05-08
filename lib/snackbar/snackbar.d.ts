declare module '@simplr-wc/snackbar' {
  export interface SnackBarProps {
    /** Message of the snackbar */
    message: string;
    /** Time until the snackbar closes in Milliseconds(ms) */
    timeout: number;
    /** Position on screen in which the snackbar is displayed */
    position: SnackBarPosition;
    /** Action that is launched if the snackbar is clicked */
    action: Function;
    /** Status of the snackbar. Determines the theme and icon */
    status: SnackbarStatus;
  }

  export enum SnackBarPosition {
    top = 'top',
    topright = 'topright',
    topleft = 'topleft',
    bottom = 'bottom',
    bottomright = 'bottomright',
    bottomleft = 'bottomleft',
  }

  export enum SnackbarStatus {
    info = 'info',
    error = 'error',
    success = 'success',
    caution = 'caution',
  }

  /**
   * Opens up the SimplrSnackbar.
   * @param {SnackBarProps} props of the Snackbar.
   */
  export function openSnackBar(props: SnackBarProps): void;
  /**
   * Opens up the SimplrSnackbar with the info theme.
   * @param {string} message
   */
  export function openSnackBar(message: string): void;
  export default openSnackBar;
}
