declare var liff: LIFF;

interface LIFF {
  init(successCallback: Function, errorCallback: Function): void;
  getProfile(): Promise<LIFFUserProfile>;
  // sendMessages(
  //   messages: Array<
  //     | LIFFTextMessage
  //     | LIFFImageMessage
  //     | LIFFVideoMessage
  //     | LIFFAudioMessage
  //     | LIFFLocationMessage
  //   >
  // );

  openWindow(params: LIFFOpenWindowParams): void;
  closeWindow(): void;
}

interface LIFFUserProfile {
  userId: string;
  displayName: string;
  pictureUrl: string;
  statusMessage: string;
}

interface LIFFTextMessage {
  type: 'text';
  text: string;
}

interface LIFFImageMessage {
  type: 'image';

  /**
   * Image URL (Max: 1000 characters)
   * HTTPS
   * JPEG
   * Max: 1024 x 1024
   * Max: 1 MB
   *
   * @type {string}
   * @memberof LIFFImageMessage
   */
  originalContentUrl: string;
  /**
   * Preview image URL (Max: 1000 characters)
   * HTTPS
   * JPEG
   * Max: 1024 x 1024
   * Max: 1 MB
   *
   * @type {string}
   * @memberof LIFFImageMessage
   */
  previewImageUrl: string;
}

interface LIFFVideoMessage {
  type: 'video';

  /**
   * URL of video file (Max: 1000 characters)
   * HTTPS
   * mp4
   * Max: 1 minute
   * Max: 10 MB
   *
   * A very wide or tall video may be cropped when played in some environments.
   *
   * @type {string}
   * @memberof LIFFVideoMessage
   */
  originalContentUrl: string;

  /**
   * URL of preview image (Max: 1000 characters)
   * HTTPS
   * JPEG
   * Max: 1024 x 1024
   * Max: 1 MB
   *
   * @type {string}
   * @memberof LIFFVideoMessage
   */
  previewImageUrl: string;
}

interface LIFFAudioMessage {
  type: 'audio';

  /**
   * URL of audio file (Max: 1000 characters)
   * HTTPS
   * m4a
   * Max: 1 minute
   * Max: 10 MB
   *
   * A very wide or tall video may be cropped when played in some environments.
   *
   * @type {string}
   * @memberof LIFFAudioMessage
   */
  originalContentUrl: string;

  /**
   * Length of audio file (milliseconds)
   *
   * @type {number}
   * @memberof LIFFAudioMessage
   */
  duration: number;
}

interface LIFFLocationMessage {
  type: 'location';

  /**
   * Title
   * Max: 100 characters
   *
   * @type {string}
   * @memberof LIFFLocationMessage
   */
  title: string;

  /**
   * Address
   * Max: 100 characters
   *
   * @type {string}
   * @memberof LIFFLocationMessage
   */
  address: string;

  latitude: number;
  longitude: number;
}

interface LIFFOpenWindowParams {
  /**
   * Specify the absolute path to the URL.
   *
   * @type {string}
   * @memberof LIFFOpenWindowParams
   */
  url: string;

  /**
   * Whether to open the URL in an external browser.
   * Specify one of the following values: The default value is `false`.
   * - `true`: Opens the URL in an external browser.
   * - `false`: Opens the URL in the in-app browser of LINE.
   *
   * @type {boolean}
   * @memberof LIFFOpenWindowParams
   */
  external: boolean;
}
