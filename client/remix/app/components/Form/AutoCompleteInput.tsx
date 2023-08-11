export const AutoCompleteInput = () => (
  <>
    <label>test</label>
    <input type="text" name="yourarea" autoComplete="on" list="tokyo" />
    <datalist id="tokyo">
      <option value="渋谷" />
      <option value="新宿" />
      <option value="池袋" />
    </datalist>
  </>
);
