export default function ({ store }) {
  if (store.state.message === 'nothing') {
    store.dispatch(
      'assignMessage',
      'changed message from "nothing" at middleware'
    );
  }
}
