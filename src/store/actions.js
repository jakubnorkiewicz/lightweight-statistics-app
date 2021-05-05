export default {
  setDataset(context, newDataset) {
    context.commit('setDataset', newDataset);
  },
  setFormula(context, selectedFormula) {
    context.commit('setFormula', selectedFormula);
  }
};
